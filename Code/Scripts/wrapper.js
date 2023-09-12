function OptanonWrapper() {

    //     if (typeof OptanonWrapperCount == "undefined") {
    //         otGetInitialGrps();
    //     }
    //     function otGetInitialGrps() {
    //         OptanonWrapperCount = '';
    //         otIniGrps = OnetrustActiveGroups;
    //     }
    //     otDeleteCookie(otIniGrps);

    //     function otDeleteCookie(iniOptGrpId) {
    //         var otDomainGrps = JSON.parse(JSON.stringify(Optanon.GetDomainData().Groups));
    //         var otDeletedGrpIds = otGetInactiveId(iniOptGrpId, OnetrustActiveGroups);
    //         if (otDeletedGrpIds.length != 0 && otDomainGrps.length != 0) {
    //             for (var i = 0; i < otDomainGrps.length; i++) {
    //                 if (otDomainGrps[i]['CustomGroupId'] != '' && otDeletedGrpIds.includes(otDomainGrps[i]['CustomGroupId'])) {
    //                     for (var j = 0; j < otDomainGrps[i]['Cookies'].length; j++) {
    //                         eraseCookie(otDomainGrps[i]['Cookies'][j]['Name']);
    //                     }
    //                 }
    //                 if (otDomainGrps[i]['Hosts'].length != 0) {
    //                     for (var j = 0; j < otDomainGrps[i]['Hosts'].length; j++) {
    //                         if (otDeletedGrpIds.includes(otDomainGrps[i]['Hosts'][j]['HostId']) && otDomainGrps[i]['Hosts'][j]['Cookies'].length != 0) {
    //                             for (var k = 0; k < otDomainGrps[i]['Hosts'][j]['Cookies'].length; k++) {
    //                                 eraseCookie(otDomainGrps[i]['Hosts'][j]['Cookies'][k]['Name']);
    //                             }
    //                         }
    //                     }
    //                 }

    //             }
    //             window.location.reload();

    //         }
    //         otGetInitialGrps();
    //     }
    //     function otGetInactiveId(customIniId, otActiveGrp) {
    //         customIniId = customIniId.split(",");
    //         customIniId = customIniId.filter(Boolean);
    //         otActiveGrp = otActiveGrp.split(",");
    //         otActiveGrp = otActiveGrp.filter(Boolean);
    //         var result = [];
    //         for (var i = 0; i < customIniId.length; i++) {
    //             if (otActiveGrp.indexOf(customIniId[i]) <= -1) {
    //                 result.push(customIniId[i]);
    //             }
    //         }
    //         return result;
    //     }

    //     function eraseCookie(name) {
    //         domainName = window.location.hostname;
    //         document.cookie = name + '=; Max-Age=-99999999; Path=/;Domain=' + domainName;
    //         document.cookie = name + '=; Max-Age=-99999999; Path=/;';
    //         localStorage.removeItem(name);
    //     }

    // document.cookie = "OptanonConsent; expires=Wed, 05 Aug 2024 23:00:00 UTC; path=/


}