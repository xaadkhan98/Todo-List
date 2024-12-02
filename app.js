const arr = {
  name: "abdullah",
  lastName: "khan",
  getTo() {
    console.log(this.name);
    const wow = (fun) => {
      console.log(this.lastName);
    };
    wow();
  },
};

arr.getTo();

function letSee() {
  console.log(this);
}

letSee.call(arr);

letSee();
