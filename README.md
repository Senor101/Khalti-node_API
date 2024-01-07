# NODE-KHALTI API

![Alt text](https://res.cloudinary.com/dsyoenswr/image/upload/v1701881087/p6hultnuro7jwc5tshuy.png)

This project is a Nodejs based implementation for integrating a popular payment gateway in Nepal, **Khalti** in your app.This project is designed to provide streamline online payment processing within your application. This can be modified and integrated in your dream app, or if you wish you can just use the api as your need.

## About Node-Khalti

This project is a simplified sales webservice implementing **khalti**. This aims to provide a simple yet effective understanding of how you can use and integrate khalti in your application. Some technical aspects of project and their implementation are as:

1. Authentication: The auth implemented is quite simple it uses a simple two role approach of 'USER' and 'ADMIN'. The authentication is based on cookies a simple isloggedIn flag is used to know about the state of login and the user id is also set in the cookies. The authentication approach used here is not recommended as this project emphasize on using the khalti api and integrating with ease. You can opt for better authentication approach like using jwt or using sessions as well.

2. Transaction history: A user can view his transaction history with ease which gives the details including the date of transaction, product and price. A admin can view all the transactions including more details including username , userid and khalti_transaction_id.

3. Access Management:

- You have to logged in to view products.
- Only admin can add new Products.
- Features like transaction, payment verification are only accessible to logged in users.

## Feature

- Simplified Integration
- Error Handling
- Extendibility
- Secure Transactions
- Transaction History details

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
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

6. Head over to `http://localhost:8000/` to explore the simplified frontend services.

## Usage

- Include the payment gateway integration modules into your nodejs project by importing the necessary components.
- Take a reference of this project to implement _khalti_ in your next dream project with your own desired business logic.

## License

This project is licensed under [MIT License](LICENSE)
