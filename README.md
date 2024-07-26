# Document Management

## URL
[https://github.com/Priyanshi726/Document-Management](https://github.com/Priyanshi726/Document-Management)

## Login Credentials
- **Email:** admin@gmail.com
- **Password:** Admin@123

## Instructions to Run

1. Start the local server by using the command and make sure it is run on port 3000:
   ```bash
   npx json-server db.json

2. in the next terminal
    ```
    npm start

## Detailed Implementation:-

### 1. User Authentication:
Implement the login form with email and password fields.
Validate email and password formats.
Compare the credentials against stored values.
Use toaster messages to provide feedback to the user.

### 2. Adding Documents:
Create a form with fields for document title, description, and file upload.
Use the FileReader API to read the uploaded file and convert it to a Base64 string.
Use Axios to send a POST request to add the document to db.json.
Show a toaster message upon successful addition.

### 3. Viewing Documents:
Use an iframe to embed PDF documents within the application.
Provide a preview functionality for the uploaded documents.

### 4. Create a Function for Downloading PDF:
Use the createObjectURL method to create a temporary URL for the Base64 PDF string.
Trigger a download by creating an anchor tag and programmatically clicking it.
Add a button to download the PDF.
