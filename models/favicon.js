export class Favicon {

    iconUrl = '/images/favicons/favicon.ico'

    constructor() {
        // Create a new link element
        const link = document.createElement('link');

        // Set the href, rel, and type attributes of the link element
        link.href = this.iconUrl;
        link.rel = 'icon';
        link.type = 'image/x-icon';

        // Append the link element to the head of the document
        document.head.appendChild(link);
    }
}