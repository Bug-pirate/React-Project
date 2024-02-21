import React from "react";
import Nav from "../Component/Nav";
import Foteer from "../Component/Foteer";
import Card from "../Component/Card";
import Carousal from "../Component/Carousal";
function Home() {
  return (
    <>
      <div>
        <div>
          <Nav />
        </div>

        <div>
          {" "}
          <Carousal />
        </div>

        <div
          className="m-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Card img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D" title=" Burger" des="pical pizza 80% off" />
          <Card img="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww" title="amlet" des="pical pizza 70% off" />
          <Card img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D" title=" Burger" des="pical pizza 80% off" />
          <Card img="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww" title="amlet" des="pical pizza 70% off" />
          <Card img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D" title=" Burger" des="pical pizza 80% off" />
          <Card img="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww" title="amlet" des="pical pizza 70% off" />
       
          <Card img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D" title=" Burger" des="pical pizza 80% off" />
          <Card img="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww" title="amlet" des="pical pizza 70% off" />
       

          <Card img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D" title=" Burger" des="pical pizza 80% off" />
          <Card img="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww" title="amlet" des="pical pizza 70% off" />
       
          <Card img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D" title=" Burger" des="pical pizza 80% off" />
          <Card img="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww" title="amlet" des="pical pizza 70% off" />
       

       

       

        
     
         
        </div>

        <div>
          <Foteer />
        </div>
      </div>
    </>
  );
}

export default Home;
