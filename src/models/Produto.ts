class Produto {
  id: number
  name: string
  image: string
  text: string

  constructor(id: number, name: string, image: string, text: string) {
    this.id = id
    this.name = name
    this.text = text
    this.image = image
  }
}

export default Produto
