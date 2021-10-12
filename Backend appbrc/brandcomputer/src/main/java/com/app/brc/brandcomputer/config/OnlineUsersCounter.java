package com.app.brc.brandcomputer.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.concurrent.atomic.AtomicInteger;

@WebListener
public class OnlineUsersCounter implements HttpSessionListener {

    private static final Logger logger = LoggerFactory.getLogger(OnlineUsersCounter.class);

    private final AtomicInteger atomicInteger = new AtomicInteger();

    protected static int numberOfSessions;

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        logger.info("New sessions is created");
        atomicInteger.incrementAndGet();
        updateSessionCounter(httpSessionEvent);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        logger.info("Session destroyed");
        atomicInteger.decrementAndGet();
        updateSessionCounter(httpSessionEvent);
    }

    private void updateSessionCounter(HttpSessionEvent httpSessionEvent){
        httpSessionEvent.getSession().getServletContext().setAttribute("activeSession", atomicInteger.get());
        logger.info("Total active sessions: " + atomicInteger.get() + ", last session id connected: " + httpSessionEvent.getSession().getId());
        numberOfSessions = atomicInteger.get();
    }

    public static int getNumberOfSessions(){
        return numberOfSessions;
    }
}
