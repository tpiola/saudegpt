import { test, expect } from "@playwright/test";

test.describe("Smoke — plataforma", () => {
test("portal EAD carrega com catálogo de trilhas", async ({ page }) => {
await page.goto("/");
await expect(
page.getByRole("heading", { level: 1 }).first(),
).toBeVisible();
await expect(page.getByRole("link", { name: /comecar|gratis|trilhas/i }).first()).toBeVisible();
});

test("lista de trilhas abre", async ({ page }) => {
await page.goto("/trilhas");
await expect(page.getByText(/perfumaria|medicamentos/i).first()).toBeVisible();
});

test("aula com quiz responde e conclui", async ({ page }) => {
await page.goto("/aula/perfumaria/barba");
await expect(
page.locator("#conteudo-principal").getByRole("heading", { level: 1 }),
).toBeVisible();

const perguntas = page.locator("#quiz fieldset");
const totalPerguntas = await perguntas.count();
for (let i = 0; i < totalPerguntas; i += 1) {
await perguntas.nth(i).locator("button[type='button']").first().click();
}

const corrigir = page.getByRole("button", { name: /corrigir quiz/i });
if (await corrigir.isVisible()) {
await expect(corrigir).toBeEnabled();
await corrigir.click();
}

const concluir = page.getByRole("button", { name: /marcar como concluida/i });
if (await concluir.isVisible()) {
await concluir.click();
}
await expect(page.getByText(/concluida|XP/i).first()).toBeVisible({ timeout: 10_000 });
});

test("hub bulas e receitas", async ({ page }) => {
await page.goto("/bulas-receitas");
await expect(
page.locator("#conteudo-principal").getByRole("heading", { name: /bulas e receitas/i }),
).toBeVisible();
});

test("SEO: sitemap e robots respondem", async ({ request }) => {
const sitemap = await request.get("/sitemap.xml");
expect(sitemap.ok()).toBeTruthy();
const robots = await request.get("/robots.txt");
expect(robots.ok()).toBeTruthy();
expect(await robots.text()).toMatch(/sitemap/i);
});

test("trilha de servicos farmaceuticos abre com modulos", async ({ page }) => {
await page.goto("/trilhas/servicos-cuidado");
await expect(page.getByText(/4 Ps da Saude/i).first()).toBeVisible();
await expect(page.getByText(/servicos farmaceuticos/i).first()).toBeVisible();
});

test("diretor entra com admin/102030 e ve o painel", async ({ page }) => {
await page.goto("/admin");
await page.locator("#admin-user").fill("admin");
await page.locator("#admin-pass").fill("102030");
await page.getByRole("button", { name: /entrar no painel/i }).click();
await expect(page.getByRole("heading", { name: /painel do diretor/i })).toBeVisible({
timeout: 15_000,
});
await expect(page.getByText(/onde a plataforma pode melhorar/i)).toBeVisible();
});

test("senha errada nao entra no painel", async ({ page }) => {
await page.goto("/admin");
await page.locator("#admin-user").fill("admin");
await page.locator("#admin-pass").fill("senha-errada");
await page.getByRole("button", { name: /entrar no painel/i }).click();
await expect(page.getByText(/credenciais invalidas/i)).toBeVisible();
});
});
