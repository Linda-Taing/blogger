export class Profile  {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.class = data.class

    
  }
}


export class Account extends Profile{
  constructor(data){
    super(data)
    this.email = data.email

  }
}


