/* eslint-disable jsdoc/tag-lines */
/* eslint-disable jsdoc/check-types */
// Mails
/**
 * @api {post} /mailit Send mails
 * @apiName Send Mail
 * @apiGroup Contact
 * @apiHeader apiKey API-key.
 * @apiHeader Authorization Authorization key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "apiKey" : "XXX",
 *       "Authorization" : "XXX"
 *     }
 * @apiBody {String} mail emailaddress.
 * @apiBody {String} fullname Fullname.
 * @apiBody {String} phone Phonenumber.
 * @apiBody {String} msg Message Content.
 * @apiSuccessExample Success-Response:
 *                     Mail sent
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiSampleRequest http://localhost:5000/mailit
 */

// Menu
/**
 * @api {get} /menu Get all menu items
 * @apiName Get menu
 * @apiGroup Menu
 * @apiHeader apiKey API-key.
 * @apiHeader Authorization Authorization key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "apiKey" : "XXX",
 *       "Authorization" : "XXX"
 *     }
 * @apiSuccessExample Success-Response:
 *    [
 *      {
 *       "id": "1",
 *       "title": "Erik",
 *       "path": "Start",
 *       "classname": "links",
 *       "pathroute": "/Start"
 *       }
 *     ]

 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiSampleRequest http://localhost:5000/menu
 */
