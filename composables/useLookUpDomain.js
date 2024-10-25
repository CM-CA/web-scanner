// composables/useLookUpDomain.ts
import DnsOverHttpResolver from "dns-over-http-resolver";

export default function useLookUpDomain() {
  const ip = useState('ip', () => '');
  const error = useState('error', () => '');

  const lookupDomain = async (url) => {
    try {
      let inputUrl = url;

      if (!/^https?:\/\//i.test(inputUrl)) {
        inputUrl = `https://${inputUrl}`;
      }

      const domain = new URL(inputUrl).hostname;
      const resolver = new DnsOverHttpResolver();
      const address = await resolver.resolve4(domain);

      ip.value = address[0];
      error.value = ''; // Limpiar el error si se resuelve la IP
    } catch (err) {
      error.value = "Error al obtener la IP: " + err.message;
      ip.value = ''; // Limpiar la IP si hay error
    }
  };

  return { ip, error, lookupDomain };
}
