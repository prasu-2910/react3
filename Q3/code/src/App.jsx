import Messagecard from "./MessageCard";
function App(){
  return(
    <div>
      <h2>Message cards</h2>

      <Messagecard
      title="welcome"
      message="Welcome to React Application"
      />
      <Messagecard
      title="Success"
      message="Your data has  been added successfully"
      />
      <Messagecard
      title="warning"
      message="Please check the entered details"
      />
      <Messagecard
      title="info"
      message="This is a reusable component example"
      />


    </div>
  )

}
export default App;