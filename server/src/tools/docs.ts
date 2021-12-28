// Mails
/**
 * @api {post} /mailit Send mails
 * @apiName Send Mail
 * @apiGroup Contact
 * @apiHeader Content-Type Type of the content.
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
 */
