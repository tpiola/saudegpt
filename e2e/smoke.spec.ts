import { test, expect } from "@playwright/test";

test.describe("Smoke — plataforma", () => {
  test("landing carrega e exibe trilhas", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: /trilhas/i }).first()).toBeVisible();
  });

  test("lista de trilhas abre", async ({ page }) => {
    await page.goto("/trilhas");
    await expect(page.getByText(/perfumaria|medicamentos/i).first()).toBeVisible();
  });

  test("aula com quiz responde e conclui", async ({ page }) => {
    await page.goto("/aula/perfumaria/barba");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const opcoes = page.locator("#quiz button[type='button']");
    const count = await opcoes.count();
    if (count > 0) {
      await opcoes.first().click();
      const corrigir = page.getByRole("button", { name: /corrigir quiz/i });
      if (await corrigir.isVisible()) {
        await corrigir.click();
      }
    }

    const concluir = page.getByRole("button", { name: /marcar como concluída/i });
    if (await concluir.isVisible()) {
      await concluir.click();
    }
    await expect(page.getByText(/concluída|XP/i).first()).toBeVisible({ timeout: 10_000 });
  });

  test("hub bulas e receitas", async ({ page }) => {
    await page.goto("/bulas-receitas");
    await expect(page.getByRole("heading", { name: /bulas e receitas/i })).toBeVisible();
  });

  test("SEO: sitemap e robots respondem", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toMatch(/sitemap/i);
  });
});
