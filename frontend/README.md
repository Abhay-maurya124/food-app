Backend
register= is the place user enter their detail and then their detail send to the backend via frontend form

step to send data

step 1> use the url where want to share the data http://localhost:5173/api/createuser this url is from backend not the frontend

step 2> by which method we are using to send the data. like POST same we use in the backend and form method.
"method:POST"

step3>header: format of data we are sending like string but for backend we
dont use plain string data it uses the json format so we use json formating like
"content-type : application/json"

step 4: sending the Actuall data by using body convet the json for the plain string for the broweser router like:
{\"name\":\"Abhay\",\"email\":\"a@b.com\",\"password\":\"1234\"}

body:json.Stinglyfy({
name:credentials.name,
})
