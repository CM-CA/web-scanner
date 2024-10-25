
# Funcion para el lookup

async lookupDomain() {
      try {
        const resolver = new DnsOverHttpResolver();
        const domain = new URL(this.url).hostname;
        const address = await resolver.resolve4(domain);
        console.log(address);
      } catch (error) {
        console.error("Error al obtener la IP:", error);
        this.error = "Error al obtener la IP";
      }
    },

