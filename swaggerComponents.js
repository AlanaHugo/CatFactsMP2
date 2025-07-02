/**
 * @swagger
 * components:
 *   schemas:
 *     CatFact:
 *       type: object
 *       required:
 *         - fact
 *       properties:
 *         fact:
 *           type: string
 *         length:
 *           type: integer
 *       example:
 *         fact: Cats sleep for 70% of their lives.
 *         length: 38
 *     CatBreed:
 *       type: object
 *       required:
 *         - breed
 *       properties:
 *         breed:
 *           type: string
 *           description: Name of the cat breed
 *         country:
 *           type: string
 *         origin:
 *           type: string
 *         coat:
 *           type: string
 *         pattern:
 *           type: string
 *       example:
 *         breed: Toyger
 *         country: USA
 *         origin: Crossbreed
 *         coat: Short
 *         pattern: Striped
 */
