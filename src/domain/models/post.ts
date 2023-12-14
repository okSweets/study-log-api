class Post {
    private _id: number;
    private _title: string;
    private _content: string | null;
    private _published: number;
    private _authorId: number
  
    get title(): string{
      return this._title;
    }
  
    set title(title: string) {
      this._title = title;
    }

    get content(): string | null {
        return this._content;
      }
    
    set content(content: string | null) {
        this._content = content;
    }

    get published(): number {
        return this._published;
    }
    
    set published(published: number) {
        this._published = published;
    }


    get authorId(): number {
        return this._authorId;
    }

    set authorId(authorId: number) {
        this._authorId = authorId;
    }

  
    constructor(id: number, title: string, content: string, published: number, authorId: number) {
      this._id = id;
      this._title = title;
      this._content = content;
      this._published = published;
      this._authorId = authorId;
    }
  }