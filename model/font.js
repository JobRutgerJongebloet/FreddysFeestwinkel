export class Font {
  constructor() {
    // Create the link element
    const link = document.createElement('link');
    // Set the link attributes
    // Font awesome
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css';
    link.integrity = 'sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';
    // Append the link to the head
    const head = document.querySelector('head');
    head.appendChild(link);

    // Font montserrat
    // Create the link element
    const font = document.createElement('link');
    // Set the link attributes
    font.rel = 'stylesheet';
    font.href = 'https://fonts.cdnfonts.com/css/montserrat';
    // Append the link to the head
    head.appendChild(font);
  }
}