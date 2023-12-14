class User {
    private _id: number;
    private _email: string;
    private _name: string | null;
    private _posts: Post[];
  
    get name(): string | null{
      return this._name;
    }
  
    set name(name: string | null) {
      this._name = name;
    }

    get email(): string {
        return this._email;
      }
    
      set email(email: string) {
        this._email = this.email;
      }

      get posts(): Post[] {
        return this._posts;
      }
    
      set posts(posts: Post[]) {
        this._posts = posts;
      }


      get id(): number {
        return this._id;
      }
    
      set id(id: number) {
        this._id = id;
      }

  
    constructor(id: number, email: string, name: string, posts: Post[]) {
      this._name = name;
      this._posts = posts;
      this._id = id;
      this._email = email;
    }
  }