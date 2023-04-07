import { db } from "./dbConnect.js"

const coll = db.collection("alcohol")

export async function addAlcohol(req, res){
    const newAlcohol = req.body
    await coll.add(newAlcohol)
    res.status(201).send("New Alcohol Added")

}

export async function getAllAlcohol( req, res){
    const collection = await coll.get()
    const alcohols = collection.docs.map(doc => ({...doc.data(), id: doc.id}))
    res.status(200).send(alcohols)

}

export async function deleteAlcohol(req, res){
    const { id } = req.params
    await coll.doc(id).delete()
    res.status(202).send("Drink has been deleted")
}

export async function updateAlcohol(req, res){
    const { id } = req.params
    const updateInfo = req.body
    await coll.doc(id).update(updateInfo)
    res.status(202).send("Alcohol has been updated")
}