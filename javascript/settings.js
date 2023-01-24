var statusURL = "LOCAL";

switch (statusURL) {
    case "LOCAL":
        var baseURL = "http://localhost:8080/";
        break;
    case "DEV":
        var baseURL = "https://freddysfeestwinkelbackend.azurewebsites.net/";
        break;
}