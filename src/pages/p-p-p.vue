<template>
  <div class="container">
    <form @submit.prevent="copy">
      <input
        type="text"
        id="username"
        name="username"
        autocomplete="off"
        required
        autofocus
        v-model="username"
      />
      <input type="password" id="password" name="password" required v-model="password" />
      <select v-model="length" name="length">
        <option v-for="len of lengthList" :value="len" :key="len">{{ len }}</option>
      </select>
      <button type="submit">随着海风吹，吹向来时庭院</button>
    </form>
    <p class="statement">使用ChatGPT制作</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

const username = ref('')
const password = ref('')
const result = ref('')
const disabled = ref(false)
const length = ref(16)
const lengthList = [8, 16, 20, 32, 64, 128]

async function sha512(message: string) {
  const messageBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-512', messageBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

function deterministicRandomGenerator(seed: string) {
  var a = 1664525,
    b = 1013904223,
    seed_ = parseInt(seed),
    x = seed_
  return function () {
    x = (a * x + b) & 0x7fffffff
    return x / 0x7fffffff
  }
}

function sha512ToPassword(hash: string, length = 32) {
  var charTypes = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '12345678901234567890',
    '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?'
  ]
  var charSet = charTypes.join('')
  var binaryArray = hexToBinary(hash)
  var hashInt = 0
  for (var i = 0; i < binaryArray.length; i++) {
    var bit = binaryArray[i] ? 1 : 0
    hashInt = (hashInt << 1) | bit
  }
  var baseIndex = Math.abs(hashInt % charSet.length)
  var baseChar = charSet.charAt(baseIndex)
  var generator = deterministicRandomGenerator(hashInt.toString())
  var password = baseChar
  while (password.length < length) {
    var charIndex = Math.floor(generator() * charSet.length)
    password += charSet.charAt(charIndex)
  }
  return password // substring(0, length);
}

function hexToBinary(hexString: string) {
  var binaryArray = []
  for (var i = 0; i < hexString.length; i += 2) {
    var byteHex = hexString.substr(i, 2)
    var byte = parseInt(byteHex, 16)
    for (var j = 7; j >= 0; j--) {
      var bit = (byte >> j) & 1
      binaryArray.push(bit)
    }
  }
  return binaryArray
}

const copy = () => {
  window.navigator.clipboard.writeText(result.value).catch((err) => {
    window.alert('失败')
  })
}

watchEffect(() => {
  if (import.meta.env.SSR) return
  if (!username.value || !password.value) {
    disabled.value = true
    result.value = ''
    return
  }
  const input = username.value + '@' + password.value
  disabled.value = true
  const len = length.value
  sha512(input)
    .then((r) => {
      result.value = sha512ToPassword(r, len)
      disabled.value = false
    })
    .catch(() => {
      window.alert('失败')
    })
})

onMounted(() => {
  try {
    Object(crypto.subtle)
  } catch (err) {
    window.alert('当前环境不支持')
  }
})
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 120px auto;
}

input[type='text'],
input[type='password'],
select {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #8d8d8d;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-size: 16px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: right 10px center;
}

button[type='submit'] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

button[type='submit']:hover {
  background-color: #0069d9;
}

@media screen and (max-width: 600px) {
  .container {
    max-width: 85%;
  }
}
.statement {
  font-size: 12px;
  color: #555;
  text-align: right;
  margin-top: 50px;
  user-select: none;
}
</style>
