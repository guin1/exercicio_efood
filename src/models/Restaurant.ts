class Restaurant {
  id: number
  name: string
  text: string
  image: string
  nota: string
  assessment: number

  constructor(
    id: number,
    name: string,
    text: string,
    image: string,
    assessment: number,
    nota: string
  ) {
    this.id = id
    this.name = name
    this.text = text
    this.image = image
    this.assessment = assessment
    this.nota = nota
  }
}

export default Restaurant
