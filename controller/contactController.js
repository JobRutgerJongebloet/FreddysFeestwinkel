import { Email } from '../model/email.js';
import { NavBar } from '../model/navBar.js'



class ContactController {
    
    constructor() {
        this.navbar = new NavBar();
        this.initForm();
        //this.addHeader();
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

    async postNewEmail(email) {
        const response = await fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.status === 201) {
            this.renderTodos();
        }
    }
}
const contactController = new ContactController();
