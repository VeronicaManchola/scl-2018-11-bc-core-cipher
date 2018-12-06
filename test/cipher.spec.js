describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33), "HIJKLMNOPQRSTUVWXYZABCDEFG")
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",33), "hijklmnopqrstuvwxyzabcdefg")
    });

    it('deberia retonar " " para " " con offset 33', () => {
      assert.equal(cipher.encode(" ",33), " ")
    });

    it('deberia retonar "XYZABCDEFGHIJKLMNOPQRSTUVW" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -29', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",-29), "XYZABCDEFGHIJKLMNOPQRSTUVW")
    });

    it('deberia retonar "xyzabcdefghijklmnopqrstuvw" para "abcdefghijklmnopqrstuvwxyz" con offset -29', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",-29), "xyzabcdefghijklmnopqrstuvw")
    });

    it('deberia retonar "Ñ" para "Ñ" con offset 1', () => {
      assert.equal(cipher.encode("Ñ",1), "Ñ")
    });

    it('deberia retonar "ñ" para "ñ" con offset 1', () => {
      assert.equal(cipher.encode("ñ",1), "ñ")
    });

    it('deberia retonar "4567890123" para "1234567890" con offset 33', () => {
      assert.equal(cipher.encode("1234567890",33), "4567890123")
    });

    it('deberia retonar "$%&\'()*+,-./!"#" para "!"#$%&\'()*+,-./" con offset 33', () => {
      assert.equal(cipher.encode("!\"#$%&'()*+,-./",33), "$%&'()*+,-./!\"#")
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")     
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33), "abcdefghijklmnopqrstuvwxyz")     
    });

    it('deberia retonar "AbC dEf" para "HiJ kLm" con offset 33', () => {
      assert.equal(cipher.decode("HiJ kLm",33), "AbC dEf")
    });

    it('deberia retonar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "XYZABCDEFGHIJKLMNOPQRSTUVW" con offset -29', () => {
      assert.equal(cipher.decode("XYZABCDEFGHIJKLMNOPQRSTUVW",-29), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('deberia retonar "abcdefghijklmnopqrstuvwxyz" para "xyzabcdefghijklmnopqrstuvw" con offset -29', () => {
      assert.equal(cipher.decode("xyzabcdefghijklmnopqrstuvw",-29), "abcdefghijklmnopqrstuvwxyz")
    });

    it('deberia retonar "Ñ" para "Ñ" con offset 1', () => {
      assert.equal(cipher.decode("Ñ",1), "Ñ")
    });

    it('deberia retonar "ñ" para "ñ" con offset 1', () => {
      assert.equal(cipher.decode("ñ",1), "ñ")
    });

    it('deberia retonar "1234567890" para "4567890123" con offset 33', () => {
      assert.equal(cipher.decode("4567890123",33), "1234567890")
    });

    it('deberia retonar "!"#$%&\'()*+,-./" para "$%&\'()*+,-./!"#" con offset 33', () => {
      assert.equal(cipher.decode("$%&'()*+,-./!\"#",33), "!\"#$%&'()*+,-./")
    });
  });

});
