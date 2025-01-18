<template>
  <div>
    <button class="chatbot-toggler" @click="toggleChatbot">
      <span class="material-symbols-rounded"><img style="border-radius: 50%;" class="w-full"
          src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png" /></span>
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot" v-show="isChatbotVisible">
      <header>
        <div class="avatar">
          <div class="tpl-avatar">
            <div class="tpl-avatar-status" style="border-color: rgb(255, 255, 255); background: rgb(105, 222, 64);"></div>
            <div class="tpl-avatar-image" style="background-color: rgb(255, 255, 255);">
              <div data-status="loaded" data-cover="true" class="lazy-img">
                <img src="https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/2A8kicyF.png" alt="" class="lazy-img-loaded">
              </div>
            </div>
          </div>
        </div>
        <h2>ChatBot</h2>
        <span class="close-btn material-symbols-outlined" @click="toggleChatbot">
          <img style="width: 35px;height: 26px;" src="https://logowik.com/content/uploads/images/close1437.jpg" />
        </span>
      </header>
      <!-- <ul class="chatbox">
        <li class="chat incoming" v-for="(msg, index) in messages" :key="index" :class="{ outgoing: msg.isUser }">
          <span class="material-symbols-outlined">
            <img class="w-full" src="/image/bot.png" />
          </span>
          <div v-if="!msg.products">
            <p :class="{ error: msg.isError }">{{ msg.text }}</p>
          </div>
          <div v-else>
            <p>{{ msg.text }}</p>
            <ul class="product-list">
              <li v-for="(product, idx) in msg.products" :key="idx" class="product-item">
                <img v-if="product.image_url" :src="product.image_url" alt="product image" class="product-image"/>
                <p class="product-name">{{ product.product_name }}</p>
              </li>
            </ul>
          </div>
        </li>
      </ul> -->
      <ul class="chatbox">
  <li
    class="chat-message"
    v-for="(msg, index) in messages"
    :key="index"
    :class="msg.isUser ? 'outgoing' : 'incoming'"
  >
    <!-- Bot icon for incoming messages -->
    <div v-if="!msg.isUser" class="chat-avatar">
      <img class="avatar-icon" src="/image/bot.png" alt="Bot Icon" />
    </div>

    <div class="chat-content">
      <div v-if="!msg.products">
        <!-- Error or regular message -->
        <p :class="{ error: msg.isError, 'bot-message': !msg.isUser, 'user-message': msg.isUser }">
          {{ msg.text }}
        </p>
      </div>
      <div v-else>
        <!-- If products exist in the message -->
        <p :class="msg.isUser ? 'user-message' : 'bot-message'">{{ msg.text }}</p>
        <ul class="product-list">
          <li v-for="(product, idx) in msg.products" :key="idx" class="product-item">
            <router-link  :to="`/san-pham/${product?.slug}/${product?.product_id}`">
              <img v-if="product.image_url" :src="product.image_url" alt="product image" class="product-image"/>
              <p class="product-name">{{ product.product_name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </li>
  <li class="options-container" v-if="showOptions">
    <!-- Sửa lại để cập nhật userInput trước khi gửi tin nhắn -->
    <button @click="userInput = 'Thiết kế giày'; sendMessage()">🛠 Thiết kế giày</button>
    <button @click="userInput = 'Sản phẩm nổi bật'; sendMessage()">👉 Sản phẩm nổi bật</button>
    <button @click="userInput = 'Thương hiệu'; sendMessage()">😊 Thương hiệu</button>
    <button @click="userInput = 'Tôi có câu hỏi khác'; sendMessage()">👀 Tôi có câu hỏi khác...</button>
  </li>
</ul>
      <div class="chat-input">
        <textarea placeholder="nhập tin nhắn của bạn ở đây..." spellcheck="false" required v-model="userInput"
          @keyup.enter.prevent="sendMessage"></textarea>
        <span id="send-btn" class="material-symbols-rounded" @click="sendMessage">
          <img style="width: 35px;height: 26px;" src="https://cdn-icons-png.freepik.com/512/5582/5582878.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatbotVisible: false,
      userInput: '',
      messages: [{
          isUser: false,
          text: "Chào bạn! 👋 tôi có thể giúp gì cho bạn!",
          isError: false,
        },
       ],
        showOptions: true, 
    };
  },
  methods: {
    toggleChatbot() {
      this.isChatbotVisible = !this.isChatbotVisible;
    },
    async sendMessage() {
      if (!this.userInput) return; // Ngăn không cho gửi tin nhắn trống

      // Thêm tin nhắn của người dùng vào mảng
      this.messages.push({ text: this.userInput, isUser: true });
      // Thêm tin nhắn "..." để hiển thị trước
      const loadingMessage = { text: '...', isUser: false };
      this.messages.push(loadingMessage);
      // http://127.0.0.1:5000/chatbot/
      //https://api-chatbot-8167.onrender.com/chatbot/
      try {
        const res = await fetch('http://127.0.0.1:5000/chatbot/', {
        // const res = await fetch('https://api-chatbot-8167.onrender.com/chatbot/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: this.userInput })
        });

        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }

        const data = await res.json();
        console.log("aaa",data);
        setTimeout(() => {
        // Xóa tin nhắn "..." sau khi nhận phản hồi
          this.messages.splice(this.messages.indexOf(loadingMessage), 1);

          if (data.top_products && data.top_products.length > 0) {
            // Nếu có danh sách sản phẩm
            this.messages.push({
              text: 'Các sản phẩm nổi bật :',
              products: data.top_products,
              isUser: false
            });
            this.showOptions = false;
          } else if (data.select_products && data.select_products.length > 0) {
            // Nếu có danh sách sản phẩm
            this.messages.push({
              text: 'Tên và hình ảnh của sản phẩm:',
              products: data.select_products,
              isUser: false
            });
            this.showOptions = false;
          } else if (data.top_nike_products && data.top_nike_products.length > 0) {
            // Nếu có danh sách sản phẩm
            this.messages.push({
              text: 'Giày Nike được bán chạy là:',
              products: data.top_nike_products,
              isUser: false
            });
            this.showOptions = false;
          } else if (data.top_adidas_products && data.top_adidas_products.length > 0) {
            // Nếu có danh sách sản phẩm
            this.messages.push({
              text: 'Giày Adidas được bán chạy là:',
              products: data.top_adidas_products,
              isUser: false
            });
            this.showOptions = false;
          } else{
            // Nếu chỉ có phản hồi đơn giản
            this.messages.push({ text: data.response, isUser: false });
            this.showOptions = false;
          }

          this.userInput = ''; // Xóa input sau khi gửi

          this.$nextTick(() => {
            const chatbox = this.$el.querySelector('.chatbox');
            chatbox.scrollTop = chatbox.scrollHeight; // Cuộn xuống cuối
          });
        }, 1200);
      } catch (error) {
        console.error('Error:', error);
        this.messages.push({ text: 'An error occurred. Please try again.', isUser: false, isError: true });
      }
      this.userInput = ''; 
    }
  }
};
</script>

<style>
.chatbot-toggler {
  position: fixed;
  bottom: 20px;
  right: 30px;
  outline: none;
  border: none;
  height: 50px;
  width: 55px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* background: #724ae8; */
  transition: all 0.2s ease;
  z-index: 100;
}

body.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}

.chatbot-toggler span {
  color: #fff;
  position: absolute;
}

.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child {
  opacity: 0;
}

body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}

.chatbot {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 420px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  z-index: 100;
  /* opacity: 0;*/
  /* pointer-events: none; */
  /* transform: scale(0.5); */
  /* transform-origin: bottom right; */
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
}

body.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #333333;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chatbot header span {
  position: absolute;
  right: 15px;
  top: 30%;
  /* display: none; */
  cursor: pointer;
  transform: translateY(-50%);
}

header h2 {
  font-size: 1.4rem;
}

.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #eaeef3;
  border-radius: 25px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

/* .chatbox .chat {
  display: flex;
  list-style: none;
}

.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}

.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: #724ae8;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}

.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 75%;
  color: #fff;
  font-size: 0.95rem;
  background: #724ae8;
}

.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}

.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}

.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
} */
.chatbox {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.incoming {
  flex-direction: row;
}

.outgoing {
  flex-direction: row-reverse;
}

.chat-avatar {
  margin-right: 10px;
}

.avatar-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.chat-content {
  max-width: 70%;
}

.bot-message {
  background-color: #4a90e2; /* Blue color for bot */
  color: white;
  padding: 10px;
  border-radius: 15px;
  border-bottom-left-radius: 0;
}

.user-message {
  background-color: #f1f1f1; /* Light gray for user */
  color: #000;
  padding: 10px;
  border-radius: 15px;
  border-bottom-right-radius: 0;
  word-wrap: break-word;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

button {
  background-color: #e7f3ff;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #d0e8ff;
}

.product-list {
  padding-left: 20px;
}

.product-item {
  margin-bottom: 10px;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.error {
  color: red;
}

.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}

.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}

.chat-input span {
  align-self: flex-end;
  color: #724ae8;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}

.chat-input textarea:valid~span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }

  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }

  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }

  .chatbot .chat-input {
    padding: 5px 15px;
  }

  .chatbot header span {
    display: block;
  }
}



.avatar {
  height: 60px;
  /* margin-right: 22px; */
  width: 60px;
  position: absolute;
  left: 25px;
}

.tpl-avatar {
  height: 100%;
  position: relative;
  width: 100%;
}

.tpl-avatar .tpl-avatar-status {
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;
  bottom: 7%;
  display: block;
  height: 16%;
  position: absolute;
  right: 7%;
  width: 16%;
}

.tpl-avatar .tpl-avatar-image {
  border-radius: 100%;
  -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, .15);
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, .15);
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.lazy-img[data-status=loaded][data-cover=true] {
  height: 100%;
  width: 100%;
}

.lazy-img[data-status=loaded][data-cover=true] img.lazy-img-loaded {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

.lazy-img img.lazy-img-loaded {
  background: transparent !important;
  display: block;
  max-width: 100%;
}

.product-list {
  list-style-type: none;
  padding: 0;
}

.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 300px; /* Giới hạn chiều rộng của khối sản phẩm */
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
  float: left;
}

.product-name {
  font-size: 16px;
  color: #000;
}
</style>
