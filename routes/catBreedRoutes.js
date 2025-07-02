const express = require("express");
const router = express.Router();
const controller = require("../controllers/catBreedController");

/**
 * @swagger
 * tags:
 *   name: CatBreeds
 *   description: API for managing cat breeds
 */

/**
 * @swagger
 * /breeds:
 *   get:
 *     summary: Get all cat breeds
 *     tags: [CatBreeds]
 *     responses:
 *       200:
 *         description: List of all breeds
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CatBreed'
 */
router.get("/", controller.getAllBreeds);

/**
 * @swagger
 * /breeds/{id}:
 *   get:
 *     summary: Get a cat breed by ID
 *     tags: [CatBreeds]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the breed
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single cat breed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CatBreed'
 */
router.get("/:id", controller.getBreed);

/**
 * @swagger
 * /breeds:
 *   post:
 *     summary: Add a new cat breed
 *     tags: [CatBreeds]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CatBreed'
 *     responses:
 *       201:
 *         description: Cat breed created
 */
router.post("/", controller.createBreed);

/**
 * @swagger
 * /breeds/{id}:
 *   put:
 *     summary: Update a cat breed
 *     tags: [CatBreeds]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the breed to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CatBreed'
 *     responses:
 *       200:
 *         description: Updated breed
 */
router.put("/:id", controller.updateBreed);

/**
 * @swagger
 * /breeds/{id}:
 *   delete:
 *     summary: Delete a cat breed
 *     tags: [CatBreeds]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the breed to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Breed deleted
 */
router.delete("/:id", controller.deleteBreed);

module.exports = router;
