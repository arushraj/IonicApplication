import { Injectable } from '@angular/core';

@Injectable()
export class AppConstant {

    //Public Members
    public APP_URL_NAME = {
        SERVICERATEURL: 'SERVICERATE'
    }


    //Private Members
    //--------Application URLs-----
    private Banners = [
        'http://zamosh.com/assets/app_banner_images/Laundry_App_Banner_1.jpg',
        'http://zamosh.com/assets/app_banner_images/Laundry_App_Banner_2.jpg',
        'http://zamosh.com/assets/app_banner_images/Laundry_App_Banner_3.jpg',
        'http://zamosh.com/assets/app_banner_images/Laundry_App_Banner_4.jpg'
    ];
    private APP_URL_LIST = {
        SERVICERATE: {
            URL: 'http://zamosh.com/fetch_rates.php',
            METHOD: 'GET'
        }
    }

    // Rate Card Activity Constants
    private static ITEM: String = "item";
    private static WASH_TYPE: String = "wash_type";
    private static PRICE: String = "price";
    private static OPTION_WP: String = "WP";
    private static OPTION_KG: String = "KG";
    private static OPTION_DC: String = "DC";
    private static OPTION_SP: String = "SP";
    private static KG_RATES_APPLY: String = "Kg Rates Only";
    private static RATE_CARD_PARCELABLE_LIST: String = "RateCardArrayList";
    private static RATE_CARD_PARCELABLE_POS: String = "RateCardPos";




    // //---2 factor SMS Verification Details
    // private static API_KEY: String = '4f3e2032-909f-11e6-96db-00163ef91450';
    // private static SMS_VERIFICATION_URL: String = "https://2factor.in/API/V1/{api_key}/SMS/+91{phone_no}/AUTOGEN";
    // //Sample Response { "Status": "Success", "Details": "5D6EBEE6-EC04-4776-846D"}
    // private static SMS_VERIFICATION_URL_CHECK: String = "https://2factor.in/API/V1/{api_key}/SMS/VERIFY/{session_id}/{otp}";
    // // Sample Response { "Status": "Success", "Details": "OTP Matched" }

    // //---BhashSms DETAILS
    // private static SMS_TRANSACTION_URL: String = "http://bhashsms.com/api/sendmsg.php?user=Zamosh&pass=123456&sender=ZAMOSH&phone=[MOBILE]&text=[TEXT]&priority=ndnd&stype=normal";
    // private static SMS_TRANSACTION_PROCESSING: String = "Hello [NAME],\nThank You for choosing Zamosh.\nYour laundry has been picked up and it will be washed right away!";
    // private static SMS_TRANSACTION_DELIVERED: String = "Hello [NAME],\nThank You for choosing Zamosh.\nYour laundry has been delivered!\nWe hope to serve you soon!";
    // private static SMS_REPLACE_MOBILE: String = "[MOBILE]";
    // private static SMS_REPLACE_TEXT: String = "[TEXT]";
    // private static SMS_REPLACE_NAME: String = "[NAME]";

    // //---Toolbar Constants
    // public static TOOLBAR_HOME: String = "Home";
    // public static TOOLBAR_RATE_CARD: String = "Rate Card";
    // public static TOOLBAR_BOOK_NOW: String = "Book Now";
    // public static TOOLBAR_PROFILE: String = "My Account";

    // // Online Database Constants
    // public static ORDER_TYPE_LAUNDRY: String = "laundry";
    // public static ORDER_STATUS_PENDING: String = "0";
    // public static ORDER_STATUS_COMPLETED: String = "1";
    // public static ORDER_STATUS_PROCESSING: String = "2";
    // public static ORDER_STATUS_SHIPPED: String = "3";
    // public static ORDER_STATUS_DELIVERED: String = "4";
    // public static ORDER_STATUS_CANCELED: String = "5";

    // // Book Now Activity Constants
    // private static KOLKATA_LATITUDE: Number = 22.5726;
    // private static KOLKATA_LONGITUDE: Number = 88.3639;
    // private static TIME_SLOT_1: String = "9 AM - 11 AM";
    // private static TIME_SLOT_2: String = "12 PM - 2 PM";
    // private static TIME_SLOT_3: String = "5 PM - 8 AM";

    // // Profile Activity Constants
    // private static ZAMOSH_ORDER_PARCELABLE: String = "ZamoshOrderParcelable";
    // private static ORDER_TYPE_PARCELABLE: String = "OrderTypeParcelable";
    // private static ORDER_TEXT_PENDING: String = "Your laundry has been collected.";
    // private static ORDER_TEXT_PROCESSING: String = "Your laundry has been washed.";
    // private static ORDER_TEXT_COMPLETED: String = "Your laundry has been delivered.";

    // // HTML Email
    // private static EMAIL_TYPE_PROCESSING: String = "processing";
    // private static EMAIL_TYPE_PROCESSING_NEW: String = "processing_new";
    // private static EMAIL_TYPE_DELIVERED: String = "delivered";
    // private static EMAIL_REPLACE_NAME: String = "[NAME]";
    // private static EMAIL_REPLACE_MESSAGE: String = "[LAUNDRY_STATE_MESSAGE]";
    // private static EMAIL_REPLACE_PENDING_MESSAGE: String = "[LAUNDRY_STATE_PENDING]";
    // private static EMAIL_REPLACE_PROCESSING_MESSAGE: String = "[LAUNDRY_STATE_PROCESSING]";
    // private static EMAIL_REPLACE_DELIVERED_MESSAGE: String = "[LAUNDRY_STATE_DELIVERED]";
    // private static EMAIL_MESSAGE_PENDING: String = "Your laundry has been collected.";
    // private static EMAIL_MESSAGE_PROCESSING_0: String = "Your laundry will be washed right away.";
    // private static EMAIL_MESSAGE_PROCESSING_1: String = "Your laundry has been washed.";
    // private static EMAIL_MESSAGE_DELIVERED_0: String = "Your laundry will be delivered soon.";
    // private static EMAIL_MESSAGE_DELIVERED_1: String = "Your laundry has been delivered.";
    // private static EMAIL_REPLACE_BIG: String = "[IMAGE_BIG]";
    // private static EMAIL_PENDING_BIG: String = "laundry_pending_big";
    // private static EMAIL_DELIVERED_BIG: String = "laundry_delivered_big";
    // private static EMAIL_REPLACE_PENDING: String = "[IMAGE_PENDING]";
    // private static EMAIL_PENDING_GREEN: String = "laundry_pending_green";
    // private static EMAIL_REPLACE_PROCESSING: String = "[IMAGE_PROCESSING]";
    // private static EMAIL_PROCESSING_GREEN: String = "laundry_processing_green";
    // private static EMAIL_PROCESSING_RED: String = "laundry_processing_red";
    // private static EMAIL_REPLACE_DELIVERED: String = "[IMAGE_DELIVERED]";
    // private static EMAIL_DELIVERED_GREEN: String = "laundry_delivered_green";
    // private static EMAIL_DELIVERED_RED: String = "laundry_delivered_red";
    /*public static getEmailBody(): string {
        return "<!-- Inliner Build Version 4380b7741bb759d6cb997545f3add21ad48f010b -->\n" +
            "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
            "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
            "  <head>\n" +
            "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
            "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
            "    <title>Copernica Marketing Software</title>\n" +
            "  </head>\n" +
            "  <body yahoofix=\"\" style=\"color: #5b656e; background: #f1f1f1; margin: 0; padding: 0;\" bgcolor=\"#f1f1f1\"><style type=\"text/css\">\n" +
            "@media only screen and (max-width: 480px) {\n" +
            "  body {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  table {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  td {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  p {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  a {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  li {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  blockquote {\n" +
            "    -webkit-text-size-adjust: none !important;\n" +
            "  }\n" +
            "  body[yahoofix] table {\n" +
            "    width: 100% !important;\n" +
            "  }\n" +
            "  body[yahoofix] .webversion {\n" +
            "    display: none; font-size: 0; max-height: 0; line-height: 0; mso-hide: all;\n" +
            "  }\n" +
            "  body[yahoofix] .logoContainer {\n" +
            "    text-align: center;\n" +
            "  }\n" +
            "  body[yahoofix] .featuredTitle {\n" +
            "    text-align: center;\n" +
            "  }\n" +
            "  body[yahoofix] .featuredContent {\n" +
            "    text-align: center;\n" +
            "  }\n" +
            "  body[yahoofix] .sectionArticleImage img {\n" +
            "    height: auto !important; max-width: 100% !important;\n" +
            "  }\n" +
            "  body[yahoofix] .preheaderContent {\n" +
            "    text-align: center;\n" +
            "  }\n" +
            "  body[yahoofix] .buttonContainer {\n" +
            "    padding: 0px 20px 0px 20px;\n" +
            "  }\n" +
            "  body[yahoofix] .column {\n" +
            "    float: left; width: 100%;\n" +
            "  }\n" +
            "  body[yahoofix] #featuredImage {\n" +
            "    text-align: center;\n" +
            "  }\n" +
            "  body[yahoofix] .featuredTitle {\n" +
            "    line-height: 24px; font-weight: normal !important; padding: 0px 10px 25px 10px;\n" +
            "  }\n" +
            "  body[yahoofix] .featuredContent {\n" +
            "    padding: 0px 10px 20px 10px;\n" +
            "  }\n" +
            "  body[yahoofix] .sectionArticleTitle {\n" +
            "    padding: 0px 10px 0px 10px !important;\n" +
            "  }\n" +
            "  body[yahoofix] .sectionArticleContent {\n" +
            "    padding: 0px 10px 30px 10px !important;\n" +
            "  }\n" +
            "}\n" +
            "</style>\n" +
            "    <span id=\"body_style\" style=\"display: block; color: #5b656e; background: #f1f1f1; margin: 0; padding: 0;\">\n" +
            "      \n" +
            "      \n" +
            "      \n" +
            "      <!-- topHeader -->\n" +
            "      <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" summary=\"\" class=\"topHeader\" style=\"border-collapse: collapse;\"><tr><td style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "            <!-- Logo (branding) -->\n" +
            "            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"640\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"logoContainer\" align=\"center\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; width: 320px; padding: 20px 0 10px 0px;\">\n" +
            "                  <a href=\"/\" title=\"Zamosh\" style=\"color: #ffffff;\">\n" +
            "                    <img class=\"logo\" src=\"http://zamosh.com/assets/sitesettings/zamosh_logo.png\" alt=\"Zamosh\" style=\"text-decoration: none; border: none;\" /></a>\n" +
            "                </td>\n" +
            "              </tr></table><!-- End Logo (branding) --></td>\n" +
            "        </tr></table><!-- End topHeader --><!-- featuredHeader --><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" summary=\"\" class=\"featuredHeader\" style=\"border-collapse: collapse; background: #556270;\" bgcolor=\"#556270\"><tr><td class=\"section\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; padding: 20px 0px 0px;\">\n" +
            "            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"640\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"column\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"395\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"featuredTitle\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #ffffff; font-size: 26px; font-weight: bold; padding: 0px 0px 10px 60px;\">\n" +
            "                        Hello, [NAME]\n" +
            "                      </td>\n" +
            "                    </tr><tr><td class=\"featuredContent\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #ffffff; font-size: 18px; padding: 0px 0px 0px 60px;\">\n" +
            "                        Thank You for choosing Zamosh!<br>[LAUNDRY_STATE_MESSAGE]<br /></td>\n" +
            "                    </tr></table></td>\n" +
            "                <td id=\"featuredImage\" class=\"column\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\"><img src=\"http://zamosh.com/assets/sitesettings/[IMAGE_BIG].png\" width=\"234\" alt=\"\" style=\"display: block; margin: 0 auto;\" /></td>\n" +
            "              </tr></table></td>\n" +
            "        </tr></table><!-- End featuredHeader --><!-- Section --><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"sectionOdd\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; background: #f1f1f1; padding: 30px 0px;\" bgcolor=\"#f1f1f1\">\n" +
            "            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"column\" valign=\"top\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "                  <table border=\"0\" cellpadding=\"10 px\" cellspacing=\"0\" width=\"200\" align=\"left\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"sectionArticleImage\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center;\" align=\"center\">\n" +
            "                        <img src=\"http://zamosh.com/assets/sitesettings/[IMAGE_PENDING].png\" width=\"150\" alt=\"\" style=\"-ms-interpolation-mode: bicubic; padding: 0px;\" /></td>\n" +
            "                    </tr><tr><td class=\"sectionArticleTitle\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 18px; padding: 10px 0px 5px;\" align=\"center\">Pickup</td></tr><tr><td class=\"sectionArticleContent\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 13px; line-height: 18px;\" align=\"center\">[LAUNDRY_STATE_PENDING]<br /></td></tr></table></td>\n" +
            "                <td class=\"column\" valign=\"top\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "                  <table border=\"0\" cellpadding=\"10 px\" cellspacing=\"0\" width=\"200\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"sectionArticleImage\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center;\" align=\"center\">\n" +
            "                        <img src=\"http://zamosh.com/assets/sitesettings/[IMAGE_PROCESSING].png\" width=\"150\" alt=\"\" style=\"-ms-interpolation-mode: bicubic; padding: 0px;\" /></td>\n" +
            "                    </tr><tr><td class=\"sectionArticleTitle\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 18px; padding: 10px 0px 5px;\" align=\"center\">Wash</td></tr><tr><td class=\"sectionArticleContent\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 13px; line-height: 18px;\" align=\"center\">[LAUNDRY_STATE_PROCESSING]<br /></td></tr></table></td>\n" +
            "                <td class=\"column\" valign=\"top\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "                  <table border=\"0\" cellpadding=\"10 px\" cellspacing=\"0\" width=\"200\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"sectionArticleImage\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center;\" align=\"center\">\n" +
            "                        <img src=\"http://zamosh.com/assets/sitesettings/[IMAGE_DELIVERED].png\" width=\"150\" alt=\"\" style=\"-ms-interpolation-mode: bicubic; padding: 0px;\" /></td>\n" +
            "                    </tr><tr><td class=\"sectionArticleTitle\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 18px; padding: 10px 0px 5px;\" align=\"center\">Delivery</td></tr><tr><td class=\"sectionArticleContent\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 13px; line-height: 18px;\" align=\"center\">[LAUNDRY_STATE_DELIVERED]<br /></td></tr></table></td>\n" +
            "              </tr></table></td>\n" +
            "        </tr></table><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"sectionEven\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; background: #ffffff; padding: 30px 0px;\" bgcolor=\"#ffffff\">\n" +
            "            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td class=\"sectionTitle\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; font-size: 26px; padding: 0px 10px 10px;\" align=\"center\">Have you checked out our other services?</td></tr><tr><td class=\"sectionSubTitle\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; padding: 0px 10px 20px;\" align=\"center\">Click the button below to visit our website!</td></tr><tr><td class=\"buttonContainer\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; padding: 10px 20px;\">\n" +
            "                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" summary=\"\" width=\"30%\" align=\"center\" style=\"border-collapse: collapse;\"><tr><td class=\"button\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42; text-align: center; border-radius: 4px; background: #26a65b; padding: 10px 5px;\" align=\"center\" bgcolor=\"#26a65b\"><a href=\"http://zamosh.com/\" title=\"zamosh.com\" target=\"_blank\" style=\"color: #ffffff; text-decoration: none; display: block; text-transform: uppercase;\">Zamosh</a></td></tr></table></td>\n" +
            "              </tr></table></td>\n" +
            "        </tr></table><!-- End Section --><!-- Social media --><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" summary=\"\" class=\"socialMedia\" style=\"border-collapse: collapse; background: #556270;\" bgcolor=\"#556270\"><tr><td class=\"whitespace\" height=\"20\" style=\"border-collapse: collapse; font-family: 0px; color: #313a42; line-height: 0px;\"> </td></tr><tr><td style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"120\" align=\"center\" summary=\"\" style=\"border-collapse: collapse;\"><tr><td align=\"center\" width=\"32\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "                  <a href=\"https://www.twitter.com\" title=\"Twitter\" target=\"_blank\" style=\"color: #09c;\"><img src=\"http://zamosh.com/assets/sitesettings/twitter.png\" width=\"29\" alt=\"Twitter\" style=\"text-decoration: none; border: none;\" /></a>\n" +
            "                </td>\n" +
            "                <td align=\"center\" width=\"32\" style=\"border-collapse: collapse; font-family: arial, helvetica, sans-serif; color: #313a42;\">\n" +
            "                  <a href=\"https://www.facebook.com\" title=\"Facebook\" target=\"_blank\" style=\"color: #09c;\"><img src=\"http://zamosh.com/assets/sitesettings/facebook.png\" width=\"29\" alt=\"Facebook\" style=\"text-decoration: none; border: none;\" /></a>\n" +
            "                </td>\n" +
            "              </tr></table></td>\n" +
            "        </tr><tr><td class=\"whitespace\" height=\"10\" style=\"border-collapse: collapse; font-family: 0px; color: #313a42; line-height: 0px;\"> </td></tr></table><!-- End Social media --></span>\n" +
            "  </body>\n" +
            "</html>";
    }*/

    //--- Function
    //Get Banner List
    public getBannerList(): any {
        return this.Banners;
    }

    //GET APP URL's
    public getAPIURL(urlname: string): object {
        if (this.APP_URL_LIST[urlname]) {
            return this.APP_URL_LIST[urlname];
        }
        return { URL: '', METHOD: '' };
    }

}
