# Project Setup

## Prerequisites

* Node.js (v16+)
* npm or yarn
* Git

---

## Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:
<br>
(consider .env.example for reference and fill your own values)

Example:

```env
db_URI=your-db-connection-string
PORT=your-port
secretKey=your-secret-key
```

---

## Run the Project

#Frontend :
```bash
npm run dev
```
#Backend :
```bash
npm start
```


## Notes

* `.env` and `node_modules/` are ignored in `.gitignore`
* Run `npm install` after cloning
* Ensure required environment variables are set
