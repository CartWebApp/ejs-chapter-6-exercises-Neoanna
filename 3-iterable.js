/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)

class Group {

  constructor() {
    this.group = [];
    return this.group;
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
      return this.has;
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.group = this.group.filter(x => x !== value)
    }
  }

  has(value) {
    return this.group.includes(value)
  }

  static from(iterableObject) {
    const group = new Group();
    for (const value of iterableObject) {
      group.add(value);
    }
    return group;
  }

  

}

// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c