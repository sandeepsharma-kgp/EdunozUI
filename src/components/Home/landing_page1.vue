<template>
  <div>
    <v-container fluid style="padding:24px;">
      <v-layout justify-center row wrap child-flex>
        <v-flex md9 xs12 sm7>
          <div class="container1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </v-flex>
        <v-flex md3 sm5 xs12>
       
         
          <div class="container1">
            <div>
              <br>
              <v-btn block color="rgba(28, 15, 123, 1)" dark>Enroll for Demo Classes</v-btn>
              <br>
              <v-btn block color="rgba(28, 15, 123, 1)" dark>Enroll for batch</v-btn>
              <br>
            </div>
          </div>
         
          <div class="container1">
            <h5 style="text-align: center;">Ask</h5>
            <form action="/action_page.php">
            
              <input type="text" id="fname" name="fullname" placeholder="Full Name">
              <input type="email" id="lname" name="email" placeholder="Email">
              <input type="email" id="lname" name="phonenumber" placeholder="Phone Number">
            
              <select id="course" name="course">
                <option value="" disabled selected>Select Course</option>
                <option value="Course A">Australia</option>
                <option value="Course B">Canada</option>
                <option value="Course C">USA</option>
              </select>

              <select id="branch" name="branch">
                <option value="" disabled selected>Select Branch</option>
                <option value="Branch A">Branch A</option>
                <option value="Branch B">Branch B</option>
                <option value="Branch C">Branch C</option>
              </select>
              <input type="submit" value="Submit">
            </form>
          </div>
          </v-flex>
          </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text],
input[type=email],
 select {
  width: 100%;
  padding: 4px;
  font-size: 12px;
  border: 2px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 6px;
  resize: vertical;
  outline: none;
}

input[type=text]:focus,
input[type=email]:focus,
select:focus{
  border: 2px solid black;
  outline: none;
}

input[type=submit] {
  background-color: #d66d02;
  color: white;
  width: 100%;
  padding: 4px;
  border: none;
  margin-top: 6px;
  text-align: center;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #ff7340;
  outline: none;
}

.container1 {
  border: 1px solid #bebebe;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  margin: 12px;
}

</style>