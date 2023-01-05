import { Bootstrap } from '../model/bootstrap.js';
import { Email } from '../model/email.js';
import { NavBar } from '../model/navBar.js';

class ContactController {

    constructor() {
        this.bootstrap = new Bootstrap();
        this.navbar = new NavBar();
        //this.initForm();
        //this.renderTodos();
    }

    

    initForm() {
        const formEl = document.getElementById('contact-form');
        formEl.addEventListener('submit', (ev) => {
            ev.preventDefault();

            //const from = document.getElementById('inputEmail').value;
            //const to = 'recipient@example.com';
            //const subject = document.getElementById('inputSubject').value;
            //const message = document.getElementById('inputMessage').value;

            const email = new Email('sender@example.com', 'recipient@example.com', 'Subject', 'Message');
            //const email = new Email(from, to, subject, message);
            console.log(email);
            // this.postNewEmail(email);
        });
    }

    async sendEmail() {
        // Set the API endpoint and access token
        const endpoint = 'https://outlook.office.com/api/v2.0/me/sendmail';
        const accessToken = 'YOUR_ACCESS_TOKEN';

        // Set the email details
        const recipient = 'recipient@example.com';
        const subject = 'Test Email';
        const body = 'This is a test email sent using the Outlook REST API.';

        // Set the request headers
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        // Set the request body
        const data = {
            'Message': {
                'Subject': subject,
                'Body': {
                    'ContentType': 'Text',
                    'Content': body
                },
                'ToRecipients': [{
                    'EmailAddress': {
                        'Address': recipient
                    }
                }]
            },
            'SaveToSentItems': 'true'
        };

        // Send the request
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        // Check the status code
        if (response.ok) {
            console.log('Email sent successfully');
        } else {
            console.error(`An error occurred: ${response.statusText}`);
        }
    }

}
const contactController = new ContactController();
