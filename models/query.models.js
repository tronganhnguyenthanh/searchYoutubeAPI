import {PrismaClient} from "@prisma/client"
async function main(req, res){
  try{
    const prisma = new PrismaClient()
    const searchName = req.body.searchName
    await prisma.query.create({data:{searchName:searchName}})
    res.status(200).json({message:"Query added successfully"})
  }catch(error){
    res.status(400).json({message:error.message})
 } 
}
export default main