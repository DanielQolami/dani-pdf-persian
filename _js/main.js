const pdfBtnEl = document.getElementById("pdf-btn");

async function makeJsPDF() {
    const { jsPDF } = window.jspdf;

    class pdfSizeMaker {
      constructor() {
        this.unitOfMeasurement = "px";
        this.width = 612;
        this.height = 791;
        this.margin = 16;
      }
    }
    const pdfSizes = new pdfSizeMaker();

    const doc = new jsPDF({
      unit: pdfSizes.unitOfMeasurement,
      format: [pdfSizes.width, pdfSizes.height],
      compress: true,
    });
    doc.setFont("Vazirmatn-VariableFont_wght");

    doc.setFontSize(22);
    doc.text("مستیم درد منو دیگه دوا نمیكنه", pdfSizes.width - pdfSizes.margin, 40, null, null, "right");

    doc.setFontSize(16);
    doc.text("غم با من زاده شده منو رها نمیكنه", pdfSizes.width - pdfSizes.margin, 70, null, null, "right");
    doc.text("خسته از هركی كه بود خسته از هركی كه هست", pdfSizes.width - pdfSizes.margin, 100, null, null, "right");
    doc.text("راه میفتم كه برم مثل هر شب مست مست", pdfSizes.width - pdfSizes.margin, 120, null, null, "right");
    
    doc.save("daniel-qolami.pdf");
}

pdfBtnEl.addEventListener("click", makeJsPDF);
