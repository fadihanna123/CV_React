// Mails
/**
 * @api {post} /api/mailit Send mails
 * @apiName Send Mail
 * @apiGroup Contact
 * @apiHeader apiKey API-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "apiKey" : "XXX",
 *     }
 * @apiBody {String} mail emailaddress.
 * @apiBody {String} fullname Fullname.
 * @apiBody {String} phone Phonenumber.
 * @apiBody {String} msg Message Content.
 * @apiSuccessExample Success-Response:
 *                     Mail sent
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiSampleRequest http://localhost:5000/api/mailit
 */

// Menu
/**
 * @api {get} /api/menu Get all menu items
 * @apiName Get menu
 * @apiGroup Menu
 * @apiHeader apiKey API-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "apiKey" : "XXX",
 *     }
 * @apiSuccessExample Success-Response:
 *    [
 *      {
 *       "id": "1",
 *       "title": "Erik",
 *       "path": "Start",
 *       "classname": "links",
 *       "pathroute": "/Start",
 *       "icon": "fa-home",
 *       }
 *     ]

 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiSampleRequest http://localhost:5000/api/menu
 */
