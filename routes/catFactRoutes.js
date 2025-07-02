const express = require("express");
const router = express.Router();
const controller = require("../controllers/catFactController");

/**
 * @swagger
 * /facts:
 *   get:
 *     summary: Get all cat facts
 *     tags: [CatFacts]
 *     responses:
 *       200:
 *         description: List of all cat facts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CatFact'
 */
router.get("/", controller.getAllFacts);

/**
 * @swagger
 * /facts/{id}:
 *   get:
 *     summary: Get a cat fact by ID
 *     tags: [CatFacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the fact
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single cat fact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CatFact'
 */
router.get("/:id", controller.getFact);

/**
 * @swagger
 * /facts:
 *   post:
 *     summary: Add a new cat fact
 *     tags: [CatFacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CatFact'
 *     responses:
 *       201:
 *         description: Cat fact created
 */
router.post("/", controller.createFact);

/**
 * @swagger
 * /facts/{id}:
 *   put:
 *     summary: Update a cat fact
 *     tags: [CatFacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the fact to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CatFact'
 *     responses:
 *       200:
 *         description: Updated cat fact
 */
router.put("/:id", controller.updateFact);

/**
 * @swagger
 * /facts/{id}:
 *   delete:
 *     summary: Delete a cat fact
 *     tags: [CatFacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the fact to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Fact deleted
 */
router.delete("/:id", controller.deleteFact);

module.exports = router;
