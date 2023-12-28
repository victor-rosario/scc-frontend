export type IAgentPayload = {
  fl?: string;
  h?: string;
  ip?: string;
  ts?: string;
  visit_scheme?: string;
  uag?: string;
  colo?: string;
  sliver?: string;
  http?: string;
  loc?: string;
  tls?: string;
  sni?: string;
  warp?: string;
  gateway?: string;
  rbi?: string;
  kex?: string;
};

const getAgent = (): Promise<IAgentPayload> => {
  return new Promise((resolve, reject) => {
    fetch("https://www.cloudflare.com/cdn-cgi/trace")
      .then(async (res) => {
        const txt = await res.text();
        const agent: any =
          txt.split("\n").reduce((a, v) => {
            const i = v.split("=");
            if (!i[0] || !i[1]) return a;
            return { ...a, [`${i[0]}`]: i[1] };
          }, {}) || {};
        return resolve(agent);
      })
      .catch((error) => reject(error));
  });
};

export default getAgent;
