describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Her testten önce ana sayfayı aç
  });

  it("Ana sayfa başlığı doğru mu?", () => {
    cy.contains("KOD ACIKTIRIR").should("be.visible"); // Başlık kontrolü
    cy.contains("PİZZA, DOYURUR").should("be.visible"); // Alt başlık kontrolü
  });

  it("Fırsat mesajı görünüyor mu?", () => {
    cy.contains("fırsatı kaçırma").should("be.visible");
  });

  it("ACIKTIM butonu var mı ve çalışıyor mu?", () => {
    cy.get("[data-cy=mainpage-button]") // Buton seçimi
      .should("be.visible") // Buton görünüyor mu?
      .and("contain", "ACIKTIM") // Metin doğru mu?
      .click(); // Butona tıkla

    cy.url().should("include", "/siparis-olustur"); // Yönlendirme yapıldı mı?
  });

  it("Logo görüntüleniyor mu?", () => {
    cy.get("img[alt='Logo']").should("be.visible");
  });
});

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Her testten önce ana sayfayı aç
  });

  it("Ana sayfa yükleniyor mu?", () => {
    cy.get("nav.main-nav").should("be.visible"); // Navigasyon çubuğu var mı?
    cy.contains("KOD ACIKTIRIR").should("be.visible"); // Başlık görünüyor mu?
    cy.contains("PİZZA, DOYURUR").should("be.visible"); // Alt başlık görünüyor mu?
  });

  it("Menü kategorileri var mı?", () => {
    const categories = ["Kore", "Pizza", "Burger", "Kızartmalar", "Fast Food", "Gazlı İçecek"];
    categories.forEach((category) => {
      cy.contains(category).should("be.visible");
    });
  });

  it("Sipariş butonları çalışıyor mu?", () => {
    cy.get(".card-button").first().click(); // İlk sipariş butonuna tıkla
    cy.url().should("include", "/siparis-olustur"); // Doğru sayfaya yönlendirildi mi?
  });

  it("Vitrin ürünleri görünüyor mu?", () => {
    const products = ["Terminal Pizza", "Position Absolute Acı Pizza", "useEffect Tavuklu Burger"];
    products.forEach((product) => {
      cy.contains(product).should("be.visible");
    });
  });

  it("Footer görüntüleniyor mu?", () => {
    cy.get("footer").should("be.visible"); // Footer var mı?
  });
});




