import { expect, test } from "@playwright/test";

test.describe("landing page", () => {
  test("renders the hero and every section", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { level: 1, name: "Vitor Cavalcante" }),
    ).toBeVisible();

    for (const id of [
      "skills",
      "experience",
      "education",
      "achievements",
      "projects",
      "certifications",
      "contact",
    ]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("toggles the colour theme", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    const before = await html.getAttribute("class");

    await page.getByRole("button", { name: /theme/i }).click();
    await expect(html).not.toHaveClass(before ?? "");
  });

  test("switches locale to Brazilian Portuguese", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "PT", exact: true }).click();

    await expect(page).toHaveURL(/\/pt-BR$/);
    await expect(page.locator("#skills")).toContainText("Habilidades");
  });

  test("opens an achievement case study", async ({ page }) => {
    await page.goto("/");
    await page.locator("#achievements a").first().click();

    await expect(page).toHaveURL(/\/achievements\//);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
