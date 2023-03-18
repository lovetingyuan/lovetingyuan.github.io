<template>
  <div style="padding: 100px 20px">
    <div class="form-container">
      <input type="text" name="username" required autocomplete="off" placeholder="用户名" autofocus v-model="username" />
      <input type="password" name="password" required autocomplete="off" placeholder="密 码" v-model="password" />
      <button type="submit" :disabled="disabled" @click="copy">登 录</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';

const username = ref('')
const password = ref('')
const result = ref('')
const disabled = ref(false)

async function sha512(message: string) {
  const messageBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-512", messageBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function deterministicRandomGenerator(seed: string) {
  var a = 1664525,
    b = 1013904223,
    seed_ = parseInt(seed),
    x = seed_;
  return function () {
    x = (a * x + b) & 0x7fffffff;
    return x / 0x7fffffff;
  };
}

function sha512ToPassword(hash: string, length = 32) {
  var charTypes = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "12345678901234567890",
    "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?"
  ];
  var charSet = charTypes.join('')
  var binaryArray = hexToBinary(hash);
  var hashInt = 0;
  for (var i = 0; i < binaryArray.length; i++) {
    var bit = binaryArray[i] ? 1 : 0;
    hashInt = (hashInt << 1) | bit;
  }
  var baseIndex = Math.abs(hashInt % charSet.length);
  var baseChar = charSet.charAt(baseIndex);
  var generator = deterministicRandomGenerator(hashInt.toString());
  var password = baseChar;
  while (password.length < length) {
    var charIndex = Math.floor(generator() * charSet.length);
    password += charSet.charAt(charIndex);
  }
  return password.substring(0, length);
}

function hexToBinary(hexString: string) {
  var binaryArray = [];
  for (var i = 0; i < hexString.length; i += 2) {
    var byteHex = hexString.substr(i, 2);
    var byte = parseInt(byteHex, 16);
    for (var j = 7; j >= 0; j--) {
      var bit = (byte >> j) & 1;
      binaryArray.push(bit);
    }
  }
  return binaryArray;
}

const copy = () => {
  window.navigator.clipboard.writeText(result.value).catch(err => {
    window.alert('复制失败')
  })
}

watchEffect(() => {
  if (import.meta.env.SSR) return
  if (!username.value || !password.value) {
    disabled.value = true;
    result.value = ''
    return
  }
  const input = username.value + '@' + password.value
  disabled.value = true;
  sha512(input).then(r => {
    result.value = sha512ToPassword(r)
    disabled.value = false
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
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

input[type="text"],
input[type="password"] {
  background-color: #F2F2F2;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
  margin-bottom: 20px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(81, 203, 238, 0.5);
  border: 1px solid rgba(81, 203, 238, 1);
}

button {
  background-color: rgba(81, 203, 238, 1);
  border: none;
  color: #fff;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: none;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: rgba(81, 203, 238, 0.8);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media screen and (min-width: 480px) {

  input[type="text"],
  input[type="password"],
  button {
    max-width: 400px;
    /* 屏幕宽度大于等于480px时，限制表格宽度 */
  }
}

@media screen and (min-width: 768px) {
  .form-container {
    flex-direction: row;
    /* 屏幕宽度大于等于768px时，在一行显示两个输入框和一个按钮 */
    justify-content: space-around;
  }

  input[type="text"],
  input[type="password"] {
    width: auto;
    /* 屏幕宽度大于等于768px时，输入框的最大宽度设置为自动 */
    margin-right: 20px;
    margin-bottom: 0;
  }

  button {
    max-width: none;
    /* 屏幕宽度大于等于768px时，取消表格宽度的限制 */
    width: 200px;
    /* 屏幕宽度大于等于768px时，按钮的宽度设置为200px */
  }
}
</style>
