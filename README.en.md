# La Réunion DataCup Challenge 2024 - QWERTEAM

The [Réunion DataCup Challenge](https://data.regionreunion.com/p/page-reunion-datacup-challenge) is a unique event highlighting data manipulation skills: extraction, processing, modeling… Organized by the Region of Réunion, the *Réunion DataCup Challenge* fosters collaboration with local data producers who aim to open, share, and enhance their data. The partners’ topics are diverse: from resource preservation to economic development, as well as concerns of local governments and their residents.

The goal of this second edition is to continue building a community around open data on the island and to initiate sustainable, impactful projects benefiting a wide audience.

---

## QWERTEAM  

Our team has chosen to tackle the challenge **"Conversational Agent for Kap Numérik"**, supported by the Region Réunion, the European Union, and FEDER.  
This challenge focuses on the **Kap Numérik** program:  
The Kap Numérik initiative is a regional financial aid designed to support small businesses in their digital transformation. In response to the growing demand for information and the increasing need for fast and accessible support, the Region seeks to implement a conversational agent (chatbot). This tool will enable businesses to check their eligibility for the Kap Numérik program and provide answers to general questions about the initiative.  

The objective is to develop a prototype of a virtual assistant capable of:
- Verifying the eligibility of businesses for the Kap Numérik program using their SIRET number.
- Answering general questions about the Kap Numérik program (eligibility conditions, application procedures, etc.).

---

## **Documentation**

Our solution addresses the challenges of assisting and informing businesses about the Kap Numérik program. It provides a solution to recurring questions and eligibility checks for potential applicants. The solution consists of deploying a conversational agent directly on the Region Réunion’s interface.  

This tool is aimed at a wide audience, including casual visitors, business owners, regional advisors, and professional service providers.

---

### **Installation**

#### To launch the backend:  
**Prerequisites**: Python & pip  

1. Retrieve the environment variables in a file named `.env` and place it in the backend directory (`backend/.env`).  
2. In the `.env` file, include the following variables:  
   - `OPENAI_API_KEY=YOUR_KEY_HERE`  
   - `ASSISTANT_ID=YOUR_ASSISTANT_ID_HERE`  
3. Install dependencies:  
   ```bash
   pip install flask
   pip install flask-cors
   pip install openai
   pip install python-dotenv
   ```  
4. Start the backend:  
   ```bash
   python3 back.py
   ```  

#### To launch the frontend:  
**Prerequisites**: npm & node  

1. Install dependencies:  
   ```bash
   npm install
   ```  
2. Build the application:  
   ```bash
   npm run build
   ```  
3. Start the frontend:  
   ```bash
   npm run start
   ```  

---

### **Usage**  

Go to `localhost:3000/` to access a web page where you can discover **ARO**, the chatbot, available at the bottom-right corner of your screen. Interact with ARO to learn more about the Kap Numérik program.

---

### **Warning**  

Our solution leverages OpenAI's GPT-4 model (currently one of the most advanced models available).  
Please note that usage is limited to the credits provided (approximately €5). If additional credits are required, up to €10 more can be unlocked upon request by emailing **pierre-alexandre.grosset@epitech.eu**.  

---

### **Contributing**  

If you wish to contribute to this project, please follow the [contribution guidelines](/CONTRIBUTING.md).  

---

### **License**  

The code is published under the [MIT License](/LICENSE).  
The data referenced in this README and in the installation guide is published under the [Open License 2.0](https://www.etalab.gouv.fr/wp-content/uploads/2018/11/open-licence.pdf).  