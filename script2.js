function whoIsOnline(friends) {
  // write code here

      const asArray = Object.entries(friends);
const filtered = asArray.filter(([key, value]) => value > 10 );
console.log(filtered);
  }






let friend = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}];

whoIsOnline(friend);