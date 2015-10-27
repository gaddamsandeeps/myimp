var should = require('should');
var request = require('supertest');
var server = require('../../../app');

process.env.A127_ENV = 'test';

describe('controllers', function() {

    describe('camapign', function() {

        describe('GET /campaign/{campaignId}', function() {
            
            it('should accept a path parameter', function(done) {
                request(server)
                    .get('/campaign/2')
                    .path({ name: campaignId})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        res.body.should.eql({
                            "responseCode": 0,
                            "responseMessage": "Success",
                            "entries": [{
                                "entryId": 2508513,
                                "campaignId": 58,
                                "userId": 2,
                                "createdTime": 1407409561000,
                                "mediaType": 1,
                                "feedItemId": "m7/1018375",
                                "fileUrl": "http://slimages.macys.com/is/image/MCY/products/2/optimized/1716192_fpx.tif?bgc=255,255,255&wid=250&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                                "itemUrl": "http://www1.macys.com/shop/product/all-clad-nonstick-5-piece-kitchen-utensil-crock-set?ID=1018375",
                                "title": "All-Clad Nonstick 5 Piece Kitchen Utensil Crock Set",
                                "comment": "Kitchen conquerors. Step up to any recipe & any task with this stunning set of polished 18/10 stainless steel tools with nonstick nylon heads. This chef's best collection includes the basics, from slotted spoon to flexible slotted turner to a crock, to cook better.",
                                "startTime": 0,
                                "endTime": 0,
                                "properties": {
                                    "pfeed_color": "",
                                    "pfeed_brand_calphalon": "",
                                    "pfeed_trend_1": "",
                                    "pfeed_cwset": "",
                                    "pfeed_colorsizeex": "[Stainless,null]",
                                    "pfeed_brand_lecreuset": "",
                                    "pfeed_altimagedescriptions": "",
                                    "pfeed_cookware_size": "",
                                    "pfeed_colorimage": "{\"Stainless\":[\"\",\"http://slimages.macys.com/is/image/MCY/products/2/optimized/1716192_fpx.tif?bgc=255,255,255&wid=100&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg\"]}",
                                    "pfeed_retailprice": "99.99",
                                    "pfeed_shortdescription": "All-Clad Nonstick 5 Piece Kitchen Utensil Crock Set",
                                    "pfeed_cookware_care": "cookware_care_showall,cookware_care_dishwasher_safe",
                                    "pfeed_cwfinder": "",
                                    "pfeed_promotions": "",
                                    "pfeed_pricetype": "Ticket",
                                    "pfeed_brand_cuisinart": "",
                                    "pfeed_cookware_component": "",
                                    "pfeed_id": "1018375",
                                    "pfeed_availability": "Y",
                                    "pfeed_bullettext": "",
                                    "pfeed_producttype": "COOKWARE",
                                    "pfeed_bvavgrating": "5.0",
                                    "pfeed_colorsize": "",
                                    "pfeed_storeavailability": "Y",
                                    "pfeed_promogroupname": "",
                                    "pfeed_url": "http://www1.macys.com/shop/product/all-clad-nonstick-5-piece-kitchen-utensil-crock-set?ID=1018375",
                                    "pfeed_brand_emerilware": "",
                                    "pfeed_secondarycategory": "Kitchen",
                                    "pfeed_brand_anolon": "",
                                    "pfeed_promoinfo": "",
                                    "pfeed_colorsizeexskuid": "[\"31721050\"]",
                                    "pfeed_promogroup": "",
                                    "pfeed_imagedesc": "All-Clad Nonstick 5 Piece Kitchen Utensil Crock Set",
                                    "pfeed_brand_clad": "brand_clad_shopall",
                                    "pfeed_cookware_material": "cookware_material_showall,cookware_material_nonstick,cookware_material_stainless",
                                    "pfeed_brand": "All-Clad",
                                    "pfeed_onhand": "104",
                                    "pfeed_subproductids": "",
                                    "pfeed_price3": "",
                                    "pfeed_brand_tools_trade": "",
                                    "pfeed_bizcategory": "Home,Kitchen",
                                    "pfeed_price2": "",
                                    "pfeed_longdescription": "Kitchen conquerors. Step up to any recipe & any task with this stunning set of polished 18/10 stainless steel tools with nonstick nylon heads. This chef's best collection includes the basics, from slotted spoon to flexible slotted turner to a crock, to cook better.",
                                    "pfeed_newarrival": "N",
                                    "pfeed_price1": "Reg $99.99",
                                    "pfeed_shippingreturns": "[\"This item may only be shipped using Express,Premium,Standard\",\"You can return this item to any Macy\\u0092s store\"]",
                                    "pfeed_saleprice": "",
                                    "pfeed_cwcollection": "",
                                    "pfeed_salestartdate": "",
                                    "pfeed_altimages": "",
                                    "pfeed_priceforfilters": "99.99",
                                    "pfeed_giftsetvalue": "",
                                    "pfeed_sizes": "",
                                    "pfeed_homecatid": "7552",
                                    "pfeed_cwtype": "Cookware Set",
                                    "pfeed_brand_kitchenaid": "",
                                    "pfeed_ckmaterial": "",
                                    "pfeed_cwcare": "Dishwasher Safe",
                                    "pfeed_brand_circulon": "",
                                    "pfeed_cwmaterial": "Nonstick,Stainless Steel",
                                    "pfeed_imageurl": "http://slimages.macys.com/is/image/MCY/products/2/optimized/1716192_fpx.tif?bgc=255,255,255&wid=250&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                                    "pfeed_saleenddate": "",
                                    "pfeed_colorsizeexupc": "[\"11644900878\"]",
                                    "pfeed_cwallproducts": "all",
                                    "pfeed_pricetypeid": "0",
                                    "pfeed_category": "Cookware",
                                    "pfeed_bvtoprated": "N",
                                    "pfeed_bvnumreviews": "1",
                                    "pfeed_brand_marthastewart": "",
                                    "pfeed_name": "All-Clad Nonstick 5 Piece Kitchen Utensil Crock Set"
                                },
                                "ugc": true
                            }],
                            "campaignProperties": null,
                            "upcProperties": null,
                            "entryStats": null,
                            "totalEntries": [
                                1
                            ],
                            "poolName": "q00",
                            "formattedEntryProps": null
                        });

                        done();
                    });
            });

        });

    });

});
