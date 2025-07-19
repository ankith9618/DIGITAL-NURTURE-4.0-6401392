package com.cognizant.filter;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
@Order(1) // Ensures this filter runs early
public class LogFilter implements GlobalFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, org.springframework.cloud.gateway.filter.GatewayFilterChain chain) {
        System.out.println("[GATEWAY] Request URI: " + exchange.getRequest().getURI());
        return chain.filter(exchange);
    }
}
