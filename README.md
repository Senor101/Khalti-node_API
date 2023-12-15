# NODE-KHALTI API

![Alt text](https://res.cloudinary.com/dsyoenswr/image/upload/v1701881087/p6hultnuro7jwc5tshuy.png)

This project is a Nodejs based implementation for integrating a popular payment gateway in Nepal, **Khalti** in your app.This project is designed to provide streamline online payment processing within your application. This can be either integrated in your own app or can be used as a microservice to suffice your application's need.

## Features
- Simplified Integration
- Error Handling
- Extendibility
- Secure Transactions

## Getting Started 
### Prerequisites
- Node.js 18+ and npm installed on your machine.

### Installation
1. Clone the repository:
``` bash
git clone https://github.com/Senor101/Khalti-node_API.git
```

2. Install dependencies:
```
cd Khalti-node_API.git
npm install
```

3. Configuration, create a `.env` file in the root directory with required API keys mentioned in `.env.example`. You can get the API keys for khalti by creating a merchant account. You can do so by clicking here [Khalti](https://admin.khalti.com/#/, "Khalti merchant").

4. Run the application locally:
```bash
npm start
```

5. Head over to `http://localhost:8000/api/v1/` and explore the backend service.

## Usage
- Include the payment gateway integration modules into your nodejs project by importing the necessary components.
- Take a reference of this project to implement *khalti* in your next dream project with your own desired business logic.

## License
This project is licensed under [MIT License](LICENSE)
