 let scanner;

    $(document).ready(function () {
      $("#start-btn").on("click", function (e) {
        e.preventDefault();
        startScanner();
      });

      $("#stop-btn").on("click", function (e) {
        e.preventDefault();
        stopScanner();
      });
    });

    function startScanner() {
      $("#start-btn").prop("disabled", true);
      $("#stop-btn").prop("disabled", false);
      $("#qr-result").text("Scanning...");
      $("#video-container").show();

      scanner = new Html5QrcodeScanner("scanner-video", {
        fps: 10,
        qrbox: {
          width: 200,
          height: 200
        }
      }, false);
      console.log(scanner)
      scanner.render(onScanSuccess, onScanFailure);
    }


    function stopScanner() {
      $("#start-btn").prop("disabled", false);
      $("#stop-btn").prop("disabled", true);
      $("#qr-result").text("");
      $("#video-container").hide();

      scanner.clear();
    }

function onScanSuccess(qrCodeMessage) {
    event.preventDefault();
      stopScanner();
      debugger;
      var test = JSON.parse(qrCodeMessage);
      console.log(test.DateIssued);
      console.log(test.Issuer);
      console.log(test.alg);
      console.log(test.signature);
      console.log(test.subject.BF);
      console.log(test.subject.DOB);
      console.log(test.subject.PCN);
      console.log(test.subject.POB);
      console.log(test.subject.Suffix);
      console.log(test.subject.fName);
      console.log(test.subject.lName);
      console.log(test.subject.mName);
      console.log(test.subject.sex);

      $("#qr-result").append();
        $('#myTable tr:last').after(`<tr><td>DateIssued<td></td><td>:</td><td>${test.DateIssued}</td></tr>`);   
        $('#myTable tr:last').after(`<tr><td>Issuer<td></td><td>:</td><td>${test.Issuer}</td></tr>`);   
        $('#myTable tr:last').after(`<tr><td>alg<td></td><td>:</td><td>${test.alg}</td></tr>`);   
        $('#myTable tr:last').after(`<tr><td>signature<td></td><td>:</td><td>${test.signature}</td></tr>`);   
        $('#myTable tr:last').after(`<tr><td>DateIssued<td></td><td>:</td><td>${test.subject.BF}</td></tr>`);    
        $('#myTable tr:last').after(`<tr><td>BF<td></td><td>:</td><td>${test.subject.DOB}</td></tr>`) 
        $('#myTable tr:last').after(`<tr><td>PCN<td></td><td>:</td><td>${test.subject.PCN}</td></tr>`) 
        $('#myTable tr:last').after(`<tr><td>POB<td></td><td>:</td><td>${test.subject.POB}</td></tr>`) 
        $('#myTable tr:last').after(`<tr><td>fName<td></td><td>:</td><td>${test.subject.fName}</td></tr>`) 
        $('#myTable tr:last').after(`<tr><td>lName<td></td><td>:</td><td>${test.subject.lName}</td></tr>`)   
        $('#myTable tr:last').after(`<tr><td>mName<td></td><td>:</td><td>${test.subject.mName}</td></tr>`)   
        $('#myTable tr:last').after(`<tr><td>Gender<td></td><td>:</td><td>${test.subject.sex}</td></tr>`)   

    }

    function onScanFailure(error) {
      $("#qr-result").text(error);
    }