function createSecretHolder(secret) {
    return {
      getSecret: function () { 
        return secret;
      },
      setSecret: function (newsecret) {
        secret = newsecret;
      }
    }
    }