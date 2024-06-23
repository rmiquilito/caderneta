const express = require('express')
const router = express.Router()

const appController = require('../controllers/appController')
const authController = require('../controllers/authController')

router.get('/', appController.authView)
router.get('/register', appController.registerView)
router.get('/home', authController.cookie, appController.homeView)

router.post('/registerCustomer', authController.cookie, appController.registerCustomer)
router.post('/registerCredit', authController.cookie, appController.registerCredit)

router.get('/userLogs', authController.cookie, appController.userLogsView)
router.get('/customerLogs', authController.cookie, appController.customerLogsView)
router.get('/creditLogs', authController.cookie, appController.creditLogsView)

router.get('/userOnlineEditor', authController.cookie, appController.userOnlineEditorView)
router.get('/userEditor', authController.cookie, appController.userEditorView)
router.get('/customerEditor', authController.cookie, appController.customerEditorView)

module.exports = router