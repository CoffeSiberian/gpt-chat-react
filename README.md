#### React client to use GPT Chat in an easy and simple way

---

##### Environment Variables

```
REACT_APP_TITLE=site_name
REACT_APP_REST_API_URL=https://api.url.com/
REACT_APP_REST_API_PASS=password_to_use_endpoint
```

##### How to use

Install dependencies

```bash
npm i
```

Generate the transpilation of the code

```bash
npm run build
```

This process generates the necessary files inside the **./build** folder to deploy the website _(it is recommended to use **apache**)_

---

##### The backend is not programmed here, it is your responsibility to implement an endpoint that delivers the information. Here's an example from another project _(the body and response are exactly the format to follow for the client)_

[./losandes-express-site/README.md/postIaChat/](https://github.com/CoffeSiberian/losandes-express-site/blame/28549a9d90344b3bbb85911b04602908f2239829/README.md#L72-L92 "losandes-express-site")
