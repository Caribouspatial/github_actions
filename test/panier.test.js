const test = require('node:test');
const assert = require('node:assert/strict');

const {
  arrondir,
  sousTotal,
  appliquerRemise,
  avecTva,
  total,
} = require('../src/panier');

const PANIER = [
  { article: 'clavier', prix: 45.0, quantite: 1 },
  { article: 'câble HDMI', prix: 12.5, quantite: 2 },
];

test('arrondir garde deux décimales', () => {
  assert.equal(arrondir(10.005), 10.01);
  assert.equal(arrondir(10.004), 10.0);
});

test('le sous-total additionne prix fois quantité', () => {
  assert.equal(sousTotal(PANIER), 70.0);
});

test('le sous-total d’un panier vide vaut zéro', () => {
  assert.equal(sousTotal([]), 0);
});

test('une remise de 10 % retire 10 % du montant', () => {
  assert.equal(appliquerRemise(100, 10), 90);
});

test('une remise de 0 % ne change rien', () => {
  assert.equal(appliquerRemise(70, 0), 70);
});

test('une remise hors bornes est refusée', () => {
  assert.throws(() => appliquerRemise(100, -5), /invalide/);
  assert.throws(() => appliquerRemise(100, 120), /invalide/);
});

test('la TVA de 21 % est ajoutée puis arrondie', () => {
  assert.equal(avecTva(100), 121.0);
  assert.equal(avecTva(70), 84.7);
});

test('le total enchaîne sous-total, remise et TVA', () => {
  assert.equal(total(PANIER), 84.7);
  assert.equal(total(PANIER, 10), 76.23);
});
