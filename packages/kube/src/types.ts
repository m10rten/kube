/**
 * @file Type definitions for Kubernetes resources.
 * @module @mvdlei/kube/types
 *
 */

export type Resource = Prettify<
  Service | Pod | Deployment | Ingress | Secret | ConfigMap | Job
> &
  Namespace;

type WithSpec = { spec: Spec };
type WithMetadata = { metadata: Metadata };
type ResourceWith = Prettify<WithSpec & WithMetadata>;

export type Namespace = string;
export type Service = {
  kind: "Service";
} & ResourceWith;
export type Pod = {
  kind: "Pod";
} & ResourceWith;
export type Deployment = {
  kind: "Deployment";
} & ResourceWith;
export type Ingress = {
  kind: "Ingress";
} & ResourceWith;
export type Secret = {
  kind: "Secret";
} & ResourceWith;
export type ConfigMap = {
  kind: "ConfigMap";
} & ResourceWith;
export type Job = {
  kind: "Job";
} & ResourceWith;
export type StatefulSet = {
  kind: "StatefulSet";
} & ResourceWith;

export type Spec = {
  containers?: Array<Container>;
  selector?: Selector;
  template?: Template;
  replicas?: number;
  matchLabels?: MatchLabels;
  metadata?: Metadata;
};
export type Selector = object;
export type Template = object;
export type MatchLabels = object;
export type Metadata = {
  name?: Name;
  labels?: Labels;
};
export type Labels = {
  app?: App;
};
export type App = string;
export type Container = {
  name?: Name;
  image?: Image;
  ports?: Ports;
  resources?: Resources;
};
export type Name = string;
export type Image =
  | {
      repository?: Repository;
      tag?: Tag;
    }
  | string;
export type Repository = object;
export type Tag = object;
export type Ports = {
  containerPort?: ContainerPort;
};
export type ContainerPort = number;
export type Resources = {
  limits?: Limits;
  requests?: Requests;
};

export type Limits = {
  cpu?: CPU;
  memory?: Memory;
};
export type CPU = string;
export type Memory = string;
export type Requests = {
  cpu?: CPU;
  memory?: Memory;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
