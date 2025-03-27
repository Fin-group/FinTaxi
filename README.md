# **FinTaxi** 🚖  

Welcome to **FinTaxi** – a fully functional taxi booking platform built with **MongoDB**, **EJS (Embedded JavaScript Templates)**, and real-time communication features using **WhatsApp, Telegram, and Email**.  

This project is part of **FinGroup**, where I have consolidated all my past work into a single organization. Right now, I am the only one managing it, but FinGroup is more than just an organization—it's a growing vision for building high-quality, real-world applications.  

---

## **🌟 What is FinTaxi?**  

FinTaxi is a web-based taxi booking system that allows users to book taxis easily. The website is dynamic, responsive, and integrates multiple notification services to ensure seamless communication between users and drivers.  

Whenever a user books a ride:  
✅ A **WhatsApp message** is sent to confirm the booking.  
✅ A **Telegram notification** is triggered.  
✅ An **email confirmation** is sent to the registered user.  

This ensures that users stay informed about their bookings in real time!  

---

## **🛠️ Technologies Used**  

FinTaxi is built with modern web technologies:  

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Embedded JavaScript Templates), Bootstrap  
- **Database:** MongoDB (NoSQL)  
- **Messaging APIs:**  
  - WhatsApp API  
  - Telegram Bot API  
  - Nodemailer (for email notifications)  
- **Deployment:** Docker, GitHub  

---

## **🚀 How to Set Up the Project?**  

Follow these simple steps to get FinTaxi running on your local machine:  

### **1️⃣ Clone the Repository**  
Open your terminal or command prompt and run:  
```sh
git clone https://github.com/Fin-group/FinTaxi.git
cd FinTaxi
```

### **2️⃣ Install Dependencies**  
Since this is a Node.js project, install the required dependencies using:  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
To make the system work properly, create a `.env` file in the root directory and add the necessary credentials:  

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
WHATSAPP_API_KEY=your_whatsapp_api_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
EMAIL_SERVICE_USER=your_email@example.com
EMAIL_SERVICE_PASS=your_email_password
```

- **MONGO_URI** → Your MongoDB connection string (Use MongoDB Atlas or a local instance).  
- **PORT** → The port where your server will run (default is `5000`).  
- **WHATSAPP_API_KEY** → API key for sending WhatsApp messages.  
- **TELEGRAM_BOT_TOKEN** → Token for integrating the Telegram bot.  
- **EMAIL_SERVICE_USER & EMAIL_SERVICE_PASS** → Your email credentials for sending notifications.  

---

### **4️⃣ Start the Server**  
Run the server using:  
```sh
npm start
```
Now, your server is up and running! You can access it at:  
**http://localhost:5000/**  

---

## **📩 Contact & Support**  
If you have any questions or want to contribute, feel free to reach out via the **WhatsApp, Telegram, or Email** features already integrated into the platform.  

This project is a part of **FinGroup**, a personal initiative to build real-world applications and improve technical skills. Although I am currently the only person working on it, my vision is to grow it into something bigger!  

🚀 **FinTaxi is not just another project—it’s a real working taxi website with smart integrations.** More features and improvements are on the way! Stay tuned. 🎯
